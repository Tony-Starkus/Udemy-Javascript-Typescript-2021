/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!******************************!*\
  !*** ./src/aula309/index.ts ***!
  \******************************/

class VideoPlayer {
    constructor(videoPlayerElements) {
        this.videoPlayer = videoPlayerElements.videoPlayer;
        this.playButton = videoPlayerElements.playButton;
        this.stopButton = videoPlayerElements.stopButton;
    }
    playToggle() {
        if (this.videoPlayer.paused) {
            this.videoPlayer.play;
            this.playButton.innerText = 'Pause';
        }
        else {
            this.videoPlayer.pause;
            this.playButton.innerText = 'Play';
        }
    }
    stop() {
        throw new Error('Method not implemented.');
    }
    iniciarEventos() {
        this.playButton.addEventListener('click', () => {
            this.playToggle();
        });
        this.stopButton.addEventListener('click', () => {
            this.videoPlayer.pause();
            this.videoPlayer.currentTime = 0;
            this.playButton.innerText = 'Play';
        });
    }
}
const videoPlayer = new VideoPlayer({
    videoPlayer: document.querySelector('.video'),
    playButton: document.querySelector('.play'),
    stopButton: document.querySelector('.stop'),
});
videoPlayer.iniciarEventos();

/******/ })()
;
//# sourceMappingURL=bundle.js.map