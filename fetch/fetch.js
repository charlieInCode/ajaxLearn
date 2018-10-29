/*
  Assuming there are two json file in different url need to merge together
  Use Promise
*/

const user_url = "https://jsonplaceholder.typicode.com/users";
const title_url = "https://jsonplaceholder.typicode.com/posts";
const output = document.getElementById('output');


var promises = []
promises.push(fetch(user_url))
promises.push(fetch(title_url))
// To require two url
Promise.all(promises)
	.then(function(responses){
		return responses.map(x => x.json())
	}).then(responses => {Promise.all(responses).then(res => {
		// forEach and arrow function
		res[0].forEach(entry => {
			var div = document.createElement('div')
			div.style = "width: 100%;margin-left: 350px"
			div.classList.add('user')
			var h2 = document.createElement('h2')
			h2.innerHTML = entry.name
			div.appendChild(h2)
			var p = document.createElement('p')
			p.innerHTML = entry.company.catchPhrase
			div.appendChild(p)
			output.appendChild(div)

			// make list
			var ul = document.createElement('ul')
			ul.classList.add('posts')
			ul.style = "width: 100%;margin-left: 350px"
			res[1].forEach(postdata => {
				if (postdata.userId == entry.id){
					var li = document.createElement('li')
					li.classList.add('posts')
					li.innerHTML = postdata.title
					ul.appendChild(li)
				}
			})
			output.appendChild(ul)
		})
	})})