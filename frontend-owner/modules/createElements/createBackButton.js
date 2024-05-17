export default function createBackButton() {
  const backBtn = document.createElement('button');
  backBtn.textContent = 'Back';

  let backBtnHref;

  if (isDraft) backBtnHref = 'drafts.html';
  else backBtnHref = 'published-posts.html';

  backBtn.addEventListener('click', () => (window.location.href = backBtnHref));

  return backBtn;
}
