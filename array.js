let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
let c=(prop)=>{console.log(prop)}

c(secretMessage.length)

secretMessage.pop()

c(secretMessage.length)
secretMessage.push('to','Program')
c(secretMessage.length)

secretMessage[secretMessage.indexOf('easily')]='right'
c(secretMessage[7])
secretMessage.shift()
secretMessage.unshift('Programming')


c(secretMessage)


secretMessage.splice(secretMessage.indexOf('get'),5,'know,')
c(secretMessage)
c(secretMessage.join(' '))
