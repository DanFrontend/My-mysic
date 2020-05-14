<template>
  <div>
    <ul class="header">
      <li>
        <router-link
          to="/rock"
          class="tabs"
        >
          <p class="title">Рок</p>
          <div class="header__item icon-box">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="hand-rock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464.8 80c-26.9-.4-48.8 21.2-48.8 48h-8V96.8c0-26.3-20.9-48.3-47.2-48.8-26.9-.4-48.8 21.2-48.8 48v32h-8V80.8c0-26.3-20.9-48.3-47.2-48.8-26.9-.4-48.8 21.2-48.8 48v48h-8V96.8c0-26.3-20.9-48.3-47.2-48.8-26.9-.4-48.8 21.2-48.8 48v136l-8-7.1v-48.1c0-26.3-20.9-48.3-47.2-48.8C21.9 127.6 0 149.2 0 176v66.4c0 27.4 11.7 53.5 32.2 71.8l111.7 99.3c10.2 9.1 16.1 22.2 16.1 35.9v6.7c0 13.3 10.7 24 24 24h240c13.3 0 24-10.7 24-24v-2.9c0-12.8 2.6-25.5 7.5-37.3l49-116.3c5-11.8 7.5-24.5 7.5-37.3V128.8c0-26.3-20.9-48.4-47.2-48.8z"></path></svg>
          </div>
        </router-link>
      </li>

      <li>
        <router-link
          to="/foreign"
          class="tabs"
        >
          <p class="title">Зарубежное</p>
          <div class="header__item icon-box">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="compact-disc" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zM88 256H56c0-105.9 86.1-192 192-192v32c-88.2 0-160 71.8-160 160zm160 96c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96zm0-128c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32z"></path></svg>
          </div>
        </router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'Header',
 
}
</script>

<style scoped lang="scss">
  .tabs {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
  }
  .title {
    color: #61677c;
    text-shadow: 1px 1px 1px #fff;
    margin-bottom: 5px;
    font-size: 13px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul {
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 10px;
    background: #ebf5fc;
    box-shadow: -2px -2px 5px rgba(255, 255, 255, 1),
                3px 3px 5px rgba(0, 0, 0, 0.1);
    
    & li {
      position: relative;
      list-style: none;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 10px;
      
      & a {
        & .icon-box {
          width: 70px;
          height: 70px;
          background: #ebf5fc;
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: -2px -2px 5px rgba(255, 255, 255, 1),
                3px 3px 5px rgba(0, 0, 0, 0.1);
          border-radius: 10px;
          
          & svg {
            width: 25px;
            color: #6a9bd8;
          }
          
        }
      }
    }
    & .router-link-active .icon-box {
        box-shadow: inset -2px -2px 5px rgba(255, 255, 255, 1),
              inset 3px 3px 5px rgba(0, 0, 0, 0.1);
        
        & svg {
          transform: scale(0.95);
        }
      }
  }
</style>
