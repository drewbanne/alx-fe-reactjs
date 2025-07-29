const handleSubmit = async (e) => {
  e.preventDefault();
  if (!searchTerm.trim()) return;
  
  setLoading(true);
  setError(null);
  
  try {
    const searchResults = await searchUsers(searchTerm, '', 0); // Include minRepos parameter
    setUsers(searchResults);
  } catch (err) {
    setError(err.message);
    setUsers([]);
  } finally {
    setLoading(false);
  }
}; 