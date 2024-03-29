gsap.registerPlugin(ScrollTrigger);

var formes = gsap.timeline({
  scrollTrigger: {
    trigger: '.wrapper-projets',
    start: '0% 0%',
    end: '100% 100%',
    toggleActions: 'play none play none',
    scrub: 1
  },
  defaults:{
    ease: 'linear.inOut'
  },
})

.from('.forme05', {
  y: -75,
  x: -15,
  duration: 1,
})

.from('.forme03', {
  x: -50,
  y: -30,
  duration: 1,
},'<')

.from('.forme04', {
  y: 75,
  x: 15,
  duration: 0.9,
},'<')

.from('.forme06', {
  x: 50,
  y: 30,
  duration: 1,
},'<')

.to('.forme05', {
  x: -15,
  duration: 1.2,
})

.to('.forme03', {
  x: -50,
  duration: 1.2,
},'<')

.to('.forme04', {
  x: 15,
  duration: 1.2,
},'<')

.to('.forme06', {
  x: 50,
  duration: 1.2,
},'<')

.to('.forme05', {
  y: -75,
  duration: 1.2,
})

.to('.forme03', {
  y: -30,
  duration: 1.2,
},'<')

.to('.forme04', {
  y: 75,
  duration: 1.2,
},'<')

.to('.forme06', {
  y: 30,
  duration: 1.2,
},'<')

var nom = gsap.timeline({
    scrollTrigger: {
      trigger: '.wrapper-projets',
      start: '30% 30%',
      end: '30% 30%',
      toggleActions: 'play none play none',
      scrub: 1,
      markers: true,
    }
  })

  .to('h1',{
    display: 'none',
  })

.to('h1',{
    opacity: '0',
  })

  var connaissances = gsap.timeline({
    scrollTrigger: {
      trigger: '.wrapper-projets',
      start: '45% 70%',
      end: '45% 30%',
      toggleActions: 'play none play none',
      scrub: 1,
      markers : true,
    }
  })

  .to('.presentation',{
    display: 'inline',
    duration: 0.1,
  })

  .to('.presentation',{
    opacity: '1',
    duration: 0.1,
  })

  .to('.presentation',{
    duration: 5,
  })

  .to('.presentation',{
    opacity: '0',
    duration: 0.1,
  })
  .to('.presentation',{
    display: 'none',
    duration: 0.1,
  })

  var projets = gsap.timeline({
    scrollTrigger: {
      trigger: '.wrapper-projets',
      start: '65% 80%',
      end: '65% 5%',
      toggleActions: 'play none play none',
      scrub: 1,
      markers: true,
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
    duration: 0.1,
  })

  .to('.allProjets',{
    duration: 7,
  })

  .to('.allProjets',{
    opacity: '0',
    duration: 0.1,
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
    duration: 0.1,
  })

  .to('.wrapper-contact',{
    duration: 5,
  })