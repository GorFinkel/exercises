// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}


function pAequorFactory(specimenNum,dna){
return {
  specimenNum:specimenNum,
  dna:dna,
  mutate(){
    let random=Math.floor(Math.random()*15);
    console.log('randomNumber '+random);
    let base=dna[random];
      console.log('before mutation '+dna[random]);
      let dnaBase = ['A', 'T', 'C', 'G'];
      dnaBase = dnaBase.filter(e => e !== base);
     
   dna[random]=dnaBase[Math.floor(Math.random() * 3)]
    return {DNA:dna,newDNA:dna[random]}
  },
    compareDNA(anotherP){
      let common=0
        for (let i=0;i<14;i++){
          if(dna[i]===anotherP[i]){
          common++
        }
      }
      let percentage=common/15*100
        console.log('amount of commons between 2 species= '+common)
        return {text:`specimen #1 and specimen #2 have ${percentage}% DNA in commonn`,percentage:percentage+'%',dnaOfThis:dna,anotherDNA:anotherP}
    },
      willLikelySurvive(){
let amountOfCandG=dna.filter(e=>{return e==='C'||e=="G"}).length
console.log('amount of C and G = ' + amountOfCandG)
let surviveRate=amountOfCandG/15*100
console.log('chance of surviving '+ surviveRate +'%')
return surviveRate>=60
    }
  
  }
}
let arr1= mockUpStrand()
let p1=pAequorFactory(22,mockUpStrand())
let p2=pAequorFactory(23,mockUpStrand())


console.log(p2)
console.log(p2.mutate())
// console.log(pAequorFactory(23,mockUpStrand()))
console.log(p2.compareDNA(p1.dna))

console.log(p2.willLikelySurvive())


function createCollection(){
  let col=[]
for (i=0;col.length<30;i++){
  let checkObj=pAequorFactory(i,mockUpStrand())
  if (checkObj.willLikelySurvive()){
  col.push(checkObj)
  }
}
console.log(col.length)
return col

}
console.log(createCollection())
