// src/scripts/tabs.js

const tabs = document.querySelectorAll('.tab-btn');
const panels = document.querySelectorAll('.tab-panel');

function setTab(tabKey) {
  tabs.forEach(t => t.classList.remove('active'));
  panels.forEach(p => p.classList.remove('active'));
  document.querySelector(`[data-tab="${tabKey}"]`)?.classList.add('active');
  document.getElementById('panel-' + tabKey)?.classList.add('active');
}

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    setTab(tab.dataset.tab);
    history.replaceState(null, '', '#' + tab.dataset.tab);
  });
});

const hash = window.location.hash.slice(1);
if (hash && document.querySelector(`[data-tab="${hash}"]`)) {
  setTab(hash);
}