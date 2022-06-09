import Share from './controls/Share';

document.addEventListener('DOMContentLoaded', () => {
  // Activate enhanced share panel interactivity
  const sharePanel = document.getElementById('sharePanel');
  if (sharePanel !== null) {
    const shareInstance = new Share(document.getElementById('sharePanel'));
  }
});
