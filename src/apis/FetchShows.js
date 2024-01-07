const fetchShowList= async(pageNumber = 0) => {
    try {
      const apiUrl = `https://api.tvmaze.com/shows?page=${pageNumber}`;
      const response = await fetch(apiUrl);
  
      if (!response.ok) {
        throw new Error(`Error fetching data. Status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      // Handle errors as needed
      return null;
    }
  }

  export default fetchShowList;