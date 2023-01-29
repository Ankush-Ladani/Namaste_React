export function filterData(searchInput, restaurants) {
  const filterData = restaurants.filter((restro) =>
    restro?.data?.name?.toLowerCase()?.includes(searchInput?.toLowerCase())
  );
  return filterData;
}
