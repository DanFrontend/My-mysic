import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  namespaced: true,
  state: {
    songs: [
      {
        executor: "Виктор Цой",
        song: "Печаль",
        src: "/music/pech.mp3",
        filterExecutor: 'tcoy',
        filterMood: 'sad',
        filterLang: 'rus'
      },
      {
        executor: "Виктор Цой",
        song: "Алюминиевые огурцы",
        src: "/music/alumin.mp3",
        filterExecutor: 'tcoy',
        filterMood: 'funny',
        filterLang: 'rus'
      },
      {
        executor: "Ноль",
        song: "Кислотный дождь",
        src: "/music/kislot.mp3",
        filterExecutor: 'nol',
        filterMood: 'classic',
        filterLang: 'rus'
      },
      {
        executor: "Ноль",
        song: "Человек и кошка",
        src: "/music/chelovek.mp3",
        filterExecutor: 'nol',
        filterMood: 'classic',
        filterLang: 'rus'
      },
      {
        executor: "Ноль",
        song: "Улица Ленина",
        src: "/music/ulitca.mp3",
        filterExecutor: 'nol',
        filterMood: 'sad',
        filterLang: 'rus'
      },
      {
        executor: "Ноль",
        song: "Лица",
        src: "/music/litca.mp3",
        filterExecutor: 'nol',
        filterMood: 'classic',
        filterLang: 'rus'
      },
      {
        executor: "ГО",
        song: "Мы идем в тишине",
        src: "/music/tish.mp3",
        filterExecutor: 'go',
        filterMood: 'heavy',
        filterLang: 'rus'
      },
      {
        executor: "Скрябин",
        song: "Спи собi сама",
        src: "/music/spy.mp3",
        filterExecutor: 'skryabin',
        filterMood: 'sad',
        filterLang: 'ua'
      },
      {
        executor: "Лявон Вольскі",
        song: "Паветраны шар",
        src: "/music/pavet.mp3",
        filterExecutor: 'lyavon',
        filterMood: 'classic',
        filterLang: 'by'
      },
      {
        executor: "Ляпис Трубецкой",
        song: "Грай",
        src: "/music/gray.mp3",
        filterExecutor: 'lyapis',
        filterMood: 'classic',
        filterLang: 'by'
      },
      {
        executor: "Ляпис Трубецкой",
        song: "Шут",
        src: "/music/shut.mp3",
        filterExecutor: 'lyapis',
        filterMood: 'classic',
        filterLang: 'rus'
      },
      {
        executor: "Ляпис Трубецкой",
        song: "Принцесса",
        src: "/music/princesa.mp3",
        filterExecutor: 'lyapis',
        filterMood: 'classic',
        filterLang: 'rus'
      },
      {
        executor: "Ляпис Трубецкой",
        song: "Зорачкі",
        src: "/music/zorachki.mp3",
        filterExecutor: 'lyapis',
        filterMood: 'classic',
        filterLang: 'by'
      },
      {
        executor: "Ляпис Трубецкой",
        song: "Родны край",
        src: "/music/rodny_kray.mp3",
        filterExecutor: 'lyapis',
        filterMood: 'heavy',
        filterLang: 'by'
      },
      {
        executor: "Ляпис Трубецкой",
        song: "12 Обезъян",
        src: "/music/12-obezyan.mp3",
        filterExecutor: 'lyapis',
        filterMood: 'classic',
        filterLang: 'rus'
      },
      {
        executor: "Баста",
        song: "Сансара",
        src: "/music/sansara.mp3",
        filterExecutor: 'basta',
        filterMood: 'sad',
        filterLang: 'rus'
      },
      {
        executor: "Сразу Май",
        song: "Кранае",
        src: "/music/kranae.mp3",
        filterExecutor: 'srazu',
        filterMood: 'classic',
        filterLang: 'by'
      },
      {
        executor: "Сразу Май",
        song: "Небасхіл",
        src: "/music/nebashil.mp3",
        filterExecutor: 'srazu',
        filterMood: 'classic',
        filterLang: 'by'
      },
      {
        executor: "Порнофильмы",
        song: "Я так соскучился",
        src: "/music/soskuchilsja.mp3",
        filterExecutor: 'filmy',
        filterMood: 'classic',
        filterLang: 'rus'
      },
      {
        executor: "Порнофильмы",
        song: "Прости.Прощай.Привет.",
        src: "/music/prosti_proshchay.mp3",
        filterExecutor: 'filmy',
        filterMood: 'classic',
        filterLang: 'rus'
      },
      {
        executor: "Порнофильмы",
        song: "Я так боюсь",
        src: "/music/ya_tak_boyus.mp3",
        filterExecutor: 'filmy',
        filterMood: 'heavy',
        filterLang: 'rus'
      },
      {
        executor: "Порнофильмы",
        song: "Нас догонит любовь",
        src: "/music/nas_dogonit.mp3",
        filterExecutor: 'filmy',
        filterMood: 'classic',
        filterLang: 'rus'
      },
      {
        executor: "Король и шут",
        song: "Лесник",
        src: "/music/lesnik.mp3",
        filterExecutor: 'korol',
        filterMood: 'heavy',
        filterLang: 'rus'
      },
      {
        executor: "Король и шут",
        song: "Прокляты старый дом",
        src: "/music/proklyaty_dom.mp3",
        filterExecutor: 'korol',
        filterMood: 'heavy',
        filterLang: 'rus'
      },
      {
        executor: "Король и шут",
        song: "Смельчак и ветер",
        src: "/music/smelchak.mp3",
        filterExecutor: 'korol',
        filterMood: 'heavy',
        filterLang: 'rus'
      },
      {
        executor: "Король и шут",
        song: "Дурак и молния",
        src: "/music/durak_i_molniya.mp3",
        filterExecutor: 'korol',
        filterMood: 'heavy',
        filterLang: 'rus'
      },
      {
        executor: "Король и шут",
        song: "Старинные часы",
        src: "/music/starinye_chasy.mp3",
        filterExecutor: 'korol',
        filterMood: 'heavy',
        filterLang: 'rus'
      },
      {
        executor: "Тік",
        song: "Апрєль",
        src: "/music/aprel.mp3",
        filterExecutor: 'tik',
        filterMood: 'sad',
        filterLang: 'ua'
      },
      {
        executor: "Тік",
        song: "Алкоголізм",
        src: "/music/alkiholizm.mp3",
        filterExecutor: 'tik',
        filterMood: 'funny',
        filterLang: 'ua'
      },
      {
        executor: "Тік",
        song: "Олені",
        src: "/music/oleni.mp3",
        filterExecutor: 'tik',
        filterMood: 'classic',
        filterLang: 'ua'
      }
    ],
    songsFilter: [],

    songsImport: [
      {
        executor: "Meg Myers",
        song: "Sorry",
        src: "/music/import/sorry.mp3",
        filterExecutor: 'myers',
        filterMood: 'classic',
      }
    ],
    songsImportFilter: []
  },
  mutations: {
    setStart(state) {
      state.songsFilter = state.songs;
    },
    setFilter(state, param) {
      state.songsFilter = state.songs.filter(s => {
        return param[0].indexOf(s.filterExecutor) !== -1 && 
          param[1].indexOf(s.filterMood) !== -1 && 
          param[2].indexOf(s.filterLang) !== -1
      })
    },

    setImportStart(state) {
      state.songsImportFilter = state.songsImport;
    },
    setImportFilter(state, param) {
      state.songsImportFilter = state.songsImport.filter(s => {
        return param[0].indexOf(s.filterExecutor) !== -1 && 
          param[1].indexOf(s.filterMood) !== -1 
      })
    }
  }
})

export default store;