new Vue({
  el: '#exercise',
  data: {
    effectApplied: true,
    highLightClass: 'highlight',
    shrinkClass: 'shrink',
    redClass: 'red',
    halfWidthClass: 'half-size',
    applyBigLettersStyle: 'false',
    areLettersEnlarged: false,
    inputClass: '',
    isRed: true,
    progressClass: 'progress-bar',
    currentProgress: 10,
    progressWidth: 100
  },
  methods: {
    startEffect: function() {
      var vm = this;
        setInterval(function () {
          vm.effectApplied = !vm.effectApplied;
        }, 1000)
    },
    startProgress: function () {
      var vm = this;
      setInterval(function () {
        vm.currentProgress += 10;
        vm.progressWidth += 100;
      }, 1000)
    }
  },
  watch: {
    applyBigLettersStyle: function (value) {
      if (value == 'true') {
        this.areLettersEnlarged = true;
      } else {
        this.areLettersEnlarged = false;
      }
    }
  }
});
