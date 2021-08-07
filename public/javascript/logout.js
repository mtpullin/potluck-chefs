async function logOut(event) {
  event.preventDefault()

  const response = await fetch('/api/login/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  });
  if (response.ok) {
    document.location.replace('/');
    console.log('suc')
  } else {
    alert('fail');
  }
}
// if(document.querySelector('.logoutBtn'))
// document.querySelector('.logoutBtn').addEventListener('click', logOut)
// else
// document.getElementById('logoutBtn').addEventListener('click', logOut)
