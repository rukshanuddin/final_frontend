const defaultState = {
  "id": 1,
  "name": "Git",
  "links": [
    {
      "id": 1,
      "name": "Visualizing Git",
      "url": "http://git-school.github.io/visualizing-git/",
      "category": "free learning",
      "section": "Git Tutorial",
      "language": "Git",
      "blurb": "An interactive learning tutorial"
    },
    {
      "id": 2,
      "name": "Oh Shit Git",
      "url": "http://ohshitgit.com/",
      "category": "free learning",
      "section": "Git",
      "language": "Git",
      "blurb": "What to do if you make a mistake. This isn't always addressed in beginner courses"
    }
]
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case "FETCH_TOPIC":
      return action.payload;
    default:
      return state;
  }
};