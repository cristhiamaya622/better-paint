function fetchData() {
  return {
    get: function(path) {
      return fetch(`${path}`).then(response => response.json())
    }
  }
}

export default fetchData;