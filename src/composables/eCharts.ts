import { nextTick, onUnmounted, shallowRef, watch } from 'vue';
import type { ComputedRef, Ref } from 'vue';
import * as echarts from 'echarts/core';
import { BarChart, GaugeChart, LineChart, PictorialBarChart, PieChart, RadarChart, ScatterChart } from 'echarts/charts';
import type {
    BarSeriesOption,
    GaugeSeriesOption,
    LineSeriesOption,
    PictorialBarSeriesOption,
    PieSeriesOption,
    RadarSeriesOption,
    ScatterSeriesOption
} from 'echarts/charts';
import {
    DatasetComponent,
    GridComponent,
    LegendComponent,
    TitleComponent,
    ToolboxComponent,
    TooltipComponent,
    TransformComponent
} from 'echarts/components';
import type {
    DatasetComponentOption,
    GridComponentOption,
    LegendComponentOption,
    TitleComponentOption,
    ToolboxComponentOption,
    TooltipComponentOption
} from 'echarts/components';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import { useElementSize } from '@vueuse/core';
import { Dark } from "quasar"

export type ECOption = echarts.ComposeOption<
    | BarSeriesOption
    | LineSeriesOption
    | PieSeriesOption
    | ScatterSeriesOption
    | PictorialBarSeriesOption
    | RadarSeriesOption
    | GaugeSeriesOption
    | TitleComponentOption
    | LegendComponentOption
    | TooltipComponentOption
    | GridComponentOption
    | ToolboxComponentOption
    | DatasetComponentOption
>;

echarts.use([
    TitleComponent,
    LegendComponent,
    TooltipComponent,
    GridComponent,
    DatasetComponent,
    TransformComponent,
    ToolboxComponent,
    BarChart,
    LineChart,
    PieChart,
    ScatterChart,
    PictorialBarChart,
    RadarChart,
    GaugeChart,
    LabelLayout,
    UniversalTransition,
    CanvasRenderer
]);


export function useEcharts(
    domRef: Ref<HTMLElement | null>,
    options: Ref<ECOption> | ComputedRef<ECOption>,
) {


    const chart = shallowRef<echarts.ECharts | null>(null);

    const { width, height } = useElementSize(domRef, { width: 0, height: 0 });


    function isRendered() {
        return Boolean(domRef.value && chart.value);
    }

    function update(updateOptions: ECOption) {
        if (isRendered()) {
            chart.value?.setOption({ ...updateOptions, backgroundColor: 'transparent' });
        }
    }

    async function render() {
        if (domRef.value) {
            const chartTheme = Dark.isActive ? 'dark' : 'light';
            domRef.value.style.width = "calc(100% - 1em)"; //解決base content包覆後無法resize縮小問題
            await nextTick();
            chart.value = echarts.init(domRef.value, chartTheme);
            update(options.value);
        }
    }


    function destroy() {
        chart.value?.dispose();
    }

    function updateTheme() {
        destroy();
        render();
    }

    const stopSizeWatch = watch([width, height], () => {
        if (!isRendered()) {
            render();
        } else {
            chart.value?.resize();
        }
    });

    const stopOptionWatch = watch(options, newValue => {
        update(newValue);
    });

    const stopDarkModeWatch = watch(
        () => Dark.isActive,
        () => {
            updateTheme();
        }
    );

    onUnmounted(() => {
        destroy();
        stopSizeWatch();
        stopOptionWatch();
        stopDarkModeWatch();
    });

    return chart;

}
