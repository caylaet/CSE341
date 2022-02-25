exports.getPosts = (req, res, next) => {
  res.status(200).json({
    professionalName: 'Cayla Tribett', 
    nameLink:{firstName: 'cat', url: 'https://www.nytimes.com/2021/09/07/science/cat-stripes-genetics.html'}, 
    primaryDescription:'Hello', 
    workDescription1: 'Hard working', 
    workDescription2: 'Very hard Working!', 
    linkTitleText: 'Hello again',
    linkedInLink:{text: 'Cayla Tribett Linked In', link: 'https://www.linkedin.com/in/cayla-tribett-5756a1229/'},
    githubLink: {text: 'CSE341-Node GitHub link', link: 'https://github.com/caylaet/CSE341-Node'}
  });
};