let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
let c=(prop)=>{console.log(prop)}


secretMessage.pop()

secretMessage.push('to','Program')


secretMessage[secretMessage.indexOf('easily')]='right'
c(secretMessage[7])
secretMessage.shift()
secretMessage.unshift('Programming')




secretMessage.splice(secretMessage.indexOf('get'),5,'know,')

c(secretMessage.join(' '))
