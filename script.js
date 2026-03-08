const copyBtn = document.getElementById('copyBtn');
const contractAddress = document.getElementById('contractAddress');
const copyMessage = document.getElementById('copyMessage');
const yearEl = document.getElementById('year');

yearEl.textContent = new Date().getFullYear();

copyBtn?.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(contractAddress.textContent.trim());
    copyMessage.textContent = 'Contract address copied.';
    copyBtn.textContent = 'Copied';

    window.setTimeout(() => {
      copyBtn.textContent = 'Copy';
      copyMessage.textContent = '';
    }, 1800);
  } catch (error) {
    copyMessage.textContent = 'Copy failed. Highlight and copy manually.';
  }
});
