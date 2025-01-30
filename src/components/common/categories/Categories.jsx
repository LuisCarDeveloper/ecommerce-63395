import CategoriesPresentation from "./Categories.Presentation";
import useGetCategories from "../../../hook/useGetCategories";
import Loader from "../loader/Loader";
import './Categories.scss'

export default function Categories () {
    const {categoryList, error} = useGetCategories()
    return (
        <CategoriesPresentation categoryList={categoryList} className= 'beerclk-nav__menu-categories'/>
    );
  };