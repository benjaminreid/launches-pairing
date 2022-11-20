function get(url: string) {
  return async () => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };
}

export { get };
