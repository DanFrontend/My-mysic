<template>
  <div class="sidebar">
    <div class="sidebar-setting">
      <button @click="chooseAll()">Выбрать всё</button>
      <button @click="removeAll()">Убрать всё</button>
    </div>
    <div class="sidebar-item">
      <div class="sidebar-title" @click="toggleCategory('[data-exec]')">Исполнители</div>
      <label v-for="(executor, i) in dataSidebar.executor" :key="i">
        <input type="checkbox" :data-exec="executor.exec" checked="checked" @click="isFilter($event)" />
        <span>{{executor.name}}</span>
      </label>
    </div>
    <div class="sidebar-item">
      <div class="sidebar-title" @click="toggleCategory('[data-moo]')">Настроение</div>
      <label v-for="(mood, i) in dataSidebar.mood" :key="i">
        <input type="checkbox" :data-moo="mood.moo" checked="checked" @click="isFilter($event)" />
        <span>{{mood.name}}</span>
      </label>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'SidebarImport',
  data() {
    return {
      dataSidebar: {
        executor: [
          {name: 'Meg Myers', exec: 'myers'},
         
        ],
        mood: [
          {name: 'Весёлые', moo: 'funny'},
          {name: 'Грустные', moo: 'sad'},
          {name: 'Классические', moo: 'classic'},
          {name: 'Тяжелые', moo: 'heavy'}
        ]
      },
      exec: ['myers'],
      moo: ['funny', 'sad', 'classic', 'heavy']
    }
  },
  methods: {
    ...mapMutations({
      setImportFilter: 'setImportFilter'
    }),
    isFilter(v) {
      this.exec.indexOf(v.target.dataset.exec) != -1 ?
      this.exec.remove(v.target.dataset.exec) :
      this.exec.push(v.target.dataset.exec)
      
      this.moo.indexOf(v.target.dataset.moo) != -1 ?
      this.moo.remove(v.target.dataset.moo) :
      this.moo.push(v.target.dataset.moo)

      this.setImportFilter([this.exec, this.moo]);
    },
    chooseAll() {
      this.exec = ['myers'];
      this.moo = ['funny', 'sad', 'classic', 'heavy'];

      this.setImportFilter([this.exec, this.moo]);

      document.querySelectorAll('input').forEach(input => {
        input.checked = true
      })
    },
    removeAll() {
      this.exec = [];
      this.moo = [];

      this.setImportFilter([this.exec, this.moo]);

      document.querySelectorAll('input').forEach(input => {
        input.checked = false
      })
    },
    toggleCategory(val) {
      let dataCatNL = document.querySelectorAll(val);
      let dataCat = Array.apply(null, dataCatNL);
      
      dataCat.some((el) => el.checked === true) ?
      dataCat.forEach(input => {
        val === '[data-exec]' ? this.exec = [] :  
        val === '[data-moo]' ? this.moo = [] : null;

        this.setImportFilter([this.exec, this.moo]);

        input.checked = false
      }) :
      dataCat.forEach(input => {
        val === '[data-exec]' ? this.exec = ['myers'] : 
        val === '[data-moo]' ? this.moo = ['funny', 'sad', 'classic', 'heavy'] : null;

        this.setImportFilter([this.exec, this.moo]);

        input.checked = true
      });
    }
  }
}
</script>

<style scoped lang="scss">
  .sidebar {
    flex-shrink: 0;
    margin-top: 10px;
    border-radius: 10px;
    padding: 20px;
    width: 280px;
    height: 100%;
    background: #ebf5fc;
    box-shadow: -2px -2px 5px rgba(255, 255, 255, 1),
              3px 3px 5px rgba(0, 0, 0, 0.1);

    &-title {
      text-align: left;
      color: #61677c;
      text-shadow: 1px 1px 1px #fff;
      cursor: pointer;
      user-select: none; 
    }

    &-setting {
      margin-bottom: 5px;
      display: flex;
      justify-content: space-between;

      & button {
        padding: 5px 8px;
        border-radius: 15px;
        background-color: transparent;
        color: #61677c;
        font-size: 13px;
        box-shadow: 2px 2px 5px #c8c8c8, -2px -2px 5px white;
        transition: box-shadow .2s;
        border: 0;
        outline: 0;
        cursor: pointer;
        &:hover {
        box-shadow:
            8px 8px 10px #c8c8c8,
            -8px -8px 10px white;
        }
        &:active {
            box-shadow:
                2px 2px 2px #c8c8c8,
                -2px -2px 2px white;
        }
      }
    }
    &-item {
        margin: 17px 0;

      & label {
        display: flex;
        cursor: pointer;
        margin: 5px 0;
        position: relative;
        font-weight: 500;
      }
      & input {
        appearance: none;
        &::before {
          position: absolute;
          top: 1px;
          border-radius: 50%;
          content: "";
          line-height: 0;
          width: 16px;
          height: 16px;
          margin: 0 8px;
          font-size: 16px;
          box-shadow: -5px -5px 10px #fff, 5px 5px 10px #babecc;
          transition: all 0.2s ease-in-out;
        }
        &:checked::before {
          background-color: #00ff00bf
        }
        &:disabled {
          & + span {
            color: #9fa1a2
          }
        }
      }
      & span {
        padding-left: 26px;
        font-size: 14px;
        text-shadow: 1px 1px 1px #fff;
      }
    }
  }
</style>