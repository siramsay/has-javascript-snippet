const three = document.getElementById('three');

console.log(three);

const siblingBefore = three.previousElementSibling;

console.log('siblingBefore', siblingBefore);

three.addEventListener( 'mouseover', function(){
    siblingBefore.classList.add('bam');
});
three.addEventListener( 'mouseout', function(){
    siblingBefore.classList.remove('bam');
});


const triggerSiblingBefore = document.querySelectorAll('.inside-main');

console.log(triggerSiblingBefore);

triggerSiblingBefore.forEach((t) => {

    const siblingBefore = t.previousElementSibling;

    t.addEventListener( 'mouseover', function(){
        siblingBefore.classList.add('baaaaam');
    });
    t.addEventListener( 'mouseout', function(){
        siblingBefore.classList.remove('baaaaam');
    });
})
