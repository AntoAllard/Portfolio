gsap.registerPlugin(ScrollTrigger);


var nom = gsap.timeline({
    scrollTrigger: {
      trigger: '.wrapper-projets',
      start: '25% 80%',
      end: '25% 30%',
      toggleActions: 'play none play none',
      scrub: 1
    }
  })

  
  .to('.forme01', {
    opacity: '0',
    duration: 1,
  })

  .to('h1',{
    opacity: '0',
    duration: 1,
  })

  .to('.forme01',{
    display: 'none',
    duration: 0.1,
  })

  .to('h1',{
    display: 'none',
    duration: 0.1,
  },'>')

  var connaissances = gsap.timeline({
    scrollTrigger: {
      trigger: '.wrapper-projets',
      start: '45% 80%',
      end: '45% 30%',
      toggleActions: 'play none play none',
      scrub: 1
    }
  })

  .to('.presentation',{
    display: 'inline',
    duration: 0.1,
  })

  .to('.presentation',{
    opacity: '1',
    duration: 1,
  })

  .to('.presentation',{
    duration: 2,
  })

  .to('.presentation',{
    opacity: '0',
    duration: 1,
  })
  .to('.presentation',{
    display: 'none',
    duration: 0.1,
  })

  var projets = gsap.timeline({
    scrollTrigger: {
      trigger: '.wrapper-projets',
      start: '65% 80%',
      end: '65% 20%',
      toggleActions: 'play none play none',
      scrub: 1,
    }
  })

  .to('.allProjets',{
    display: 'flex',
    duration: 0.1,
  })

  .to('.imgClick',{
    cursor: 'pointer',
    duration: 0.1,
  })

  .to('.allProjets',{
    opacity: '1',
    duration: 3,
  })

  .to('.allProjets',{
    duration: 5,
  })

  .to('.allProjets',{
    opacity: '0',
    duration: 2,
  })

  .to('.imgClick',{
    cursor: 'default',
    duration: 0.1,
  })

  .to('.allProjets',{
    duration: 0.1,
    display: 'none',
  })

  var contact = gsap.timeline({
    scrollTrigger: {
      trigger: '.wrapper-projets',
      start: '95% 95%',
      end: '95% 45%',
      toggleActions: 'play none play none',
      scrub: 1,
    }
  })
 
  .to('.wrapper-contact',{
    display: 'inline',
    duration: 0.1,
  })

  .to('.wrapper-contact',{
    opacity: '1',
    duration: 3,
  })

  .to('.wrapper-contact',{
    duration: 5,
  })