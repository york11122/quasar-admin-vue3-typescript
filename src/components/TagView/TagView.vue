<template>
  <div class="row" :style="{ margin: !$q.screen.gt.sm ? '' : '0px 15px 0px 5px' }">
    <q-tabs class="tagViewBase col-12" align="left" active-color="primary" active-class="tagActive" dense swipeable
      inline-label indicator-color="transparent" :outside-arrows="$q.platform.is.electron ? true : false"
      :breakpoint="0">
      <q-route-tab class="tagView" to="/" no-caps content-class="tagView-q-router-tab">
        <q-icon size="1.3rem" name="sym_r_home" />
        <div class="line-limit-length" style="margin: 0px 5px 0px 5px">
          首頁
        </div>
      </q-route-tab>
      <!-- <q-separator vertical /> -->
      <template v-for="(tag, i) in tagViewStore.tagView" :key="tag.fullPath + i">
        <q-route-tab class="tagView" :to="tag.fullPath" no-caps content-class="tagView-q-router-tab">
          <q-icon size="1.3rem" :name="tag.icon" />
          <div class="line-limit-length">{{ tag.title }}</div>
          <q-btn class="tagView-remove-icon" style="display: inline-flex" round size="0.45em" flat icon="close"
            @click.prevent.stop="removetagViewAt(i)" />
          <q-menu touch-position context-menu>
            <q-list dense>
              <q-item clickable v-close-popup>
                <q-item-section @click="removetagViewOnRight(i)">
                  關閉右邊
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section @click="removetagViewOnLeft(i)">
                  關閉左邊
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section @click="removeOthertagView(i)">
                  關閉其他
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section @click="removeAllTagView()">
                  關閉全部
                </q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-route-tab>
      </template>
    </q-tabs>
  </div>
</template>

<script lang="ts" setup>
import { useTagViewStore } from "src/stores/tagView";
import { useKeepAliveStore } from "src/stores/keep-alive"
import { SessionStorage } from "quasar";

defineOptions({ name: "Tagview" })

const tagViewStore = useTagViewStore();
const keepAliveStore = useKeepAliveStore();

const removeAllTagView = () => {
  tagViewStore.removeAllTagView();
};

const removetagViewAt = (i: number) => {
  tagViewStore.removeTagViewAt(i);
};

const removetagViewOnRight = (i: number) => {
  tagViewStore.removeTagViewOnRight(i);
};

const removetagViewOnLeft = (i: number) => {
  tagViewStore.removeTagViewOnLeft(i);
};

const removeOthertagView = (i: number) => {
  tagViewStore.removeOtherTagView(i);
};

tagViewStore.$subscribe(
  (mutation, state) => {
    keepAliveStore.setKeepAliveList(state.tagView)
    SessionStorage.set("tagView", JSON.stringify(state.tagView));
  },
  { detached: false }
);
</script>

<style lang="scss" scoped>
// $
.body--light {
  .tagViewBase {
    background-color: white;

    .tagView {
      min-height: 20px;
      padding: 0 8px;
      transition: all 0.5s;
      border-radius: 0;
      height: 33px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .tagActive {
      color: $ACTIVE_COLOR  !important;
      background: $ACTIVE_BACKGROUND;
    }
  }
}

.body--dark {
  .tagViewBase {
    background-color: $ACTIVE_BACKGROUND_DARK;

    .tagView {
      min-height: 20px;
      padding: 0 8px;
      transition: all 0.5s;
      border-radius: 0;
      height: 33px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .tagActive {
      color: $ACTIVE_COLOR_DARK  !important;
      background: $ACTIVE_BACKGROUND_DARK;
    }
  }
}

.tagView-remove-icon {
  // font-size: .7rem;
  // border-radius: 0.2rem;
  font-weight: bold;
  opacity: 0.58;
  transition: all 0.3s;

  &:hover {
    opacity: 1;
  }
}

.line-limit-length {
  margin: 0px 5px 0px 7px;
  overflow: hidden;
  max-width: 180px;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>