<template>
	<div class="player">
		<div class="params">
			<div class="button-param" @click="consis = !consis" :class="{'active': consis}">
				<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-double-down" class="svg-inline--fa fa-angle-double-down fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M143 256.3L7 120.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0L313 86.3c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.4 9.5-24.6 9.5-34 .1zm34 192l136-136c9.4-9.4 9.4-24.6 0-33.9l-22.6-22.6c-9.4-9.4-24.6-9.4-33.9 0L160 352.1l-96.4-96.4c-9.4-9.4-24.6-9.4-33.9 0L7 278.3c-9.4 9.4-9.4 24.6 0 33.9l136 136c9.4 9.5 24.6 9.5 34 .1z"></path></svg>
			</div>
			<div class="button-param" @click="undo = !undo" :class="{'active': undo}">
				<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="undo-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M255.545 8c-66.269.119-126.438 26.233-170.86 68.685L48.971 40.971C33.851 25.851 8 36.559 8 57.941V192c0 13.255 10.745 24 24 24h134.059c21.382 0 32.09-25.851 16.971-40.971l-41.75-41.75c30.864-28.899 70.801-44.907 113.23-45.273 92.398-.798 170.283 73.977 169.484 169.442C423.236 348.009 349.816 424 256 424c-41.127 0-79.997-14.678-110.63-41.556-4.743-4.161-11.906-3.908-16.368.553L89.34 422.659c-4.872 4.872-4.631 12.815.482 17.433C133.798 479.813 192.074 504 256 504c136.966 0 247.999-111.033 248-247.998C504.001 119.193 392.354 7.755 255.545 8z"></path></svg>
			</div>
			<div>Песен на странице: {{songs.length}}</div>
		</div>
    <div class="audio-item" v-for="(song, i) in songs" :key="i">
      <div class="audio-info">
        <div class="audio-exec">{{song.executor}}</div>
        <div class="audio-song">{{song.song}}</div>
      </div>
      <audio ref="audio" class="audio" controls>
        <source :src="song.src" type="audio/mpeg" />
      </audio>
    </div>
		<div class="single-player" v-if="songs.length">
			<div class="btns-wrapper">
				<div class="btn skip" @click="prevSong()">
					<div class="inner-wrapper">
						<i class="material-icons-round">skip_previous</i>
					</div>
				</div>
				<div class="btn" :class="{active: actPlay}" @click="playSinge()">
					<div class="inner-wrapper">
						<i v-if="actPlay" class="material-icons-round">pause</i>
						<i v-else class="material-icons-round">play_arrow</i>
					</div>
				</div>
				<div class="btn skip" @click="nextSong()">
					<div class="inner-wrapper">
						<i class="material-icons-round">skip_next</i>
					</div>
				</div>
			</div>
			<div class="single-info">
				<span>{{singleInfo.exec}}</span>
				<span>{{singleInfo.song}}</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Player",
	props: {
		songs: {
			type: Array,
			default: () => []
		}
	},
	data() {
		return {
			consis: true,
			undo: false,
			activeSong: null,
			actPlay: false,
			singleInfo: []
		}
	},
	mounted() {
		if(!this.$refs.audio) return; // Что-бы не было ошибки когда пустой масив
    this.$refs.audio.forEach(t => {
			let index = this.$refs.audio.indexOf(t);

			t.addEventListener('play', ()=> {
				this.actPlay = true;
				this.$refs.audio.forEach(subT => {
					subT !== this.$refs.audio[index] ? 
						(subT.pause(), subT.currentTime = 0) : 
						(subT.play(), this.activeSong = subT)
				});
			})

			t.addEventListener('pause', ()=> {
				this.actPlay = false;
			})
			
			t.addEventListener('seeked', ()=> {
				this.actPlay = true;
			})

      t.addEventListener('ended', ()=> {
				t.currentTime = 0;
				if(!this.undo && !this.consis) return;
        index === this.$refs.audio.length - 1 ? 
          (this.undo ? this.$refs.audio[0].play() : null) :
          this.$refs.audio[index + 1].play();
			})
		});
		this.activeSong = this.$refs.audio[0]
	},
	methods: {
		playSinge() {
			this.activeSong.paused ? this.activeSong.play() : this.activeSong.pause();
		},
		nextSong() {
			let songs = this.$refs.audio;
			let index = songs.indexOf(this.activeSong);
			index === this.$refs.audio.length - 1 ? songs[0].play() : songs[index + 1].play();
		},
		prevSong() {
			let songs = this.$refs.audio;
			let index = songs.indexOf(this.activeSong);
			index === 0 ? songs[this.$refs.audio.length - 1].play() : songs[index - 1].play();
		}
	},
	watch: {
		undo() {
			this.undo === true ? this.consis = false : null;
		},
		consis() {
			this.consis === true ? this.undo = false : null;
		},
		activeSong() {
			let track = this.activeSong.parentNode
			this.singleInfo = {
				exec: track.querySelector('.audio-exec').innerText,
				song: track.querySelector('.audio-song').innerText
			}
		}
	}
};
</script>

<style scoped lang="scss">
.button-param {
	box-shadow: -2px -2px 5px rgba(255, 255, 255, 1), 3px 3px 5px rgba(0, 0, 0, 0.1);
	padding: 5px;
	border-radius: 50%;
	cursor: pointer;
	margin-right: 10px;
  margin-bottom: 10px;
	display: flex;
  justify-content: center;
	width: 14px;
	height: 14px;
	& svg {
		color: rgb(122, 56, 56);
		width: 14px;
		height: 14px;
	}

	&.active {
		box-shadow: inset -2px -2px 5px rgba(255, 255, 255, 1), inset 3px 3px 5px rgba(0, 0, 0, 0.1);
		& svg {
			color: green;
			transform: scale(0.95);
		}
	}
}

.audio {
	width: 100%;
	outline: none;

	&::-webkit-media-controls-panel {
		background: #ebf5fc;
	}

	&-info {
		color: #61677c;
		text-shadow: 1px 1px 1px #fff;
		padding: 5px;
		width: 230px;
		font-weight: 500;
		flex-shrink: 0;
    box-sizing: border-box;
	}
	&-song {
		font-weight: 600;
		font-size: 15px;
	}

	&-item {
		box-shadow: -2px -2px 5px white, 3px 3px 5px rgba(0, 0, 0, 0.1);
		margin-bottom: 10px;
		display: flex;
		border-radius: 10px;
		padding: 5px;
	}
}
.g-background-default {
	background-color: #ebf5fc;
}
.params {
	display: flex;
}

.single-player {
  display: grid;
  place-items: center;
	position: sticky;
	bottom: 0;
	z-index: 2;
	background: rgba(235, 245, 252, .9);
	// background: linear-gradient(318.32deg, #c3d1e4 0%, #dde7f3 55%, #d4e0ed 100%);
	height: 95px;
	width: 100%;
	box-shadow: -2px -2px 5px white, 3px 3px 5px rgba(0, 0, 0, 0.1);
	border-radius: 5px;
	padding-top: 15px;
}
.single-info {
	display: flex;

	& span:last-child {
		margin-left: 5px;
		font-weight: 600;
	}
}
.btns-wrapper {
  display: grid;
  grid-auto-flow: column;
  gap: 24px;
  transform: scale(3);
}
.btn {
  width: 15px;
  height: 15px;
  position: relative;
  border-radius: 5px;
  padding: 1px;
  box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48), -4px -2px 16px #ffffff;
  cursor: pointer;
	background: #ebf5fc;
}
.btn .inner-wrapper {
  width: 100%;
  height: 100%;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;
  display: grid;
  place-items: center;

	& i {
		user-select: none;
		transition: all 0.2s ease-in-out;
		font-size: 8px;
		position: relative;
		color: rgba(201, 215, 230, 0.8);
		text-shadow: 2px 2px 2px #d6e1ef99, 0 0 0 #000, 2px 2px 2px #d6e1ef00;
	}
}
.btn.active .inner-wrapper {
    box-shadow: inset 3px 3px 7px rgba(136, 165, 191, 0.48),
      inset -3px -3px 7px #ffffff;

		& i {
			color: black;
			text-shadow: 1px 1px 1px #d6e1ef99, 0 0 0 #000, 1px 1px 1px #d6e1ef00;
		}
}
.skip {
	&:active {
		box-shadow: inset 3px 3px 7px rgba(136, 165, 191, 0.48),
      inset -3px -3px 7px #ffffff;

		& i {
			color: black;
			text-shadow: 1px 1px 1px #d6e1ef99, 0 0 0 #000, 1px 1px 1px #d6e1ef00;
		}
	}
}
</style>