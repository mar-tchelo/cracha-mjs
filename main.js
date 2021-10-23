

const LinksSocialMedia = {
github:'mar-tchelo',
youtube:'Martchelo2525',
facebook:'marcelo.josesilva.7',
instagram:'marcelo.js',
twitter:'tchelojs10'
}

function changeSocialMediaLinks() {
    for(let li of socialLinks.children){

    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
    
    //alert(li.children[0].href)  

    }
}

changeSocialMediaLinks()


function getGitHubProfileInfos(user) {
    const url = `https://api.github.com/users/${LinksSocialMedia.github}`

   fetch(url)//pega o retorno da url
   .then(response=> response.json()) //pega a resposta do fetch e transforma em JSOn
   .then(data => {
       
    userBio.textContent = data.bio
    userName.textContent = data.name;
    userLink.href = data.html_url
    userLoginGit.textContent = data.login
    userAvatar.src = data.avatar_url


   }) //Armazena a resposta em JSON
}
getGitHubProfileInfos()