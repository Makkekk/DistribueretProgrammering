(function(){
  const BALLOON = document.getElementById('balloon');
  const START_PX = 64;
  const GROW_FACTOR = 1.1; // +10%
  const SHRINK_FACTOR = 0.9; // -10%
  const EXPLODE_THRESHOLD_PX = 220; // explode when bigger than this

  BALLOON.style.fontSize = START_PX + 'px';

  function parsePx(value){
    return parseFloat(value) || 0;
  }

  function explode(){
    BALLOON.textContent = '💥';
    window.removeEventListener('keydown', keyHandler, {passive:false});
    BALLOON.style.fontSize = (EXPLODE_THRESHOLD_PX) + 'px';
  }

  function keyHandler(e){
    if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') return;
    e.preventDefault();

    const current = parsePx(getComputedStyle(BALLOON).fontSize);
    let next;
    if (e.key === 'ArrowUp'){
      next = current * GROW_FACTOR;
    } else {
      next = current * SHRINK_FACTOR;
    }
    next = Math.max(8, next);

    BALLOON.style.fontSize = Math.round(next) + 'px';

    if (e.key === 'ArrowUp' && next > EXPLODE_THRESHOLD_PX){
      explode();
    }
  }

  window.addEventListener('keydown', keyHandler, {passive:false});

  BALLOON.addEventListener('dblclick', function(){
    BALLOON.textContent = '🎈';
    BALLOON.style.fontSize = START_PX + 'px';
    window.removeEventListener('keydown', keyHandler, {passive:false});
    window.addEventListener('keydown', keyHandler, {passive:false});
  });
})();
