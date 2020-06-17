/* eslint-disable prefer-destructuring */
import { useLocation } from "react-router-dom";

export default function useQueryGetter() {

  // Set default searchQuery => fetch popular repos with empty URL
  let searchQuery = "stars:%3E1"
  let pageNum = 1;

  const location = useLocation().search;
  const searchRegx = location.match(/search=([^&#]*)/);
  const pageNumRegx = location.match(/page=([^&#]*)/);
  if (searchRegx !== null) searchQuery = searchRegx[1]
  if (pageNumRegx !== null) pageNum = pageNumRegx[1];
  return { searchQuery, pageNum };
}