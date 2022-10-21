import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import querString from "query-string";
import { HeroCard } from "../components";
import { getHerosByName } from "../helpers";

export const SearchPage = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const { q = '' } = querString.parse(location.search)
    const heros = getHerosByName(q)
    const showSearch = (q.length === 0);
    const showError = (q.length > 0) && heros.length === 0;
    const { searchText, onInputChange } = useForm({
        searchText: q
    })

    const onSearchSubmit = (e) => {
        e.preventDefault()
        if (searchText.trim().length <= 1) return
        navigate(`?q=${searchText}`)
    }

    return (
        <>
            <h1>Search</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Searching</h4>
                    <hr />
                    <form onSubmit={onSearchSubmit}>
                        <input
                            type="text"
                            placeholder="Search a hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={onInputChange} />
                        <button className="btn btn-outline-primary mt-1">Search</button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Result</h4>
                    <hr />
                    <div className="alert alert-primary animate__animated animate__fadeIn"
                        style={{ display: showSearch ? '' : 'none' }}>
                        Search a hero
                    </div>

                    <div className="alert alert-danger animate__animated animate__fadeIn"
                        style={{ display: showError ? '' : 'none' }}>
                        No hero with <b>{q}</b>
                    </div>
                    {
                        heros.map(hero => (<HeroCard key={hero.id} {...hero} />))
                    }

                </div>
            </div>
        </>
    )
}
