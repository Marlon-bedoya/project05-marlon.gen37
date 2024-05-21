import { useEffect, useState } from "react"
import PokeCard from "./PokeCard"
import './style/ListPokemons.css'

const ListPokemons = ({ pokemons, starIndex, endIndex, quantityPage, setPage, page }) => {

    const [blockPage, setBlockPage] = useState(1)
    const [pagePerBlock, setPagePerBlock] = useState(5)

    // Lógica de bloques

    const initialPageBlock = (blockPage - 1) * pagePerBlock
    const endPageBlock = initialPageBlock + pagePerBlock

    useEffect(() => {
        const newBlock = Math.ceil(page / pagePerBlock) 
        if (page / pagePerBlock) {
            setBlockPage(newBlock)
        }
    }, [page])


    const arrPages = []
    for (let i = 1; i <= quantityPage; i++) {
        arrPages.push(i)
    }

    const changePage = (pageNumber) => setPage(pageNumber)

    const handlePrev = () => {
        setPage(page - 1)
    }

    const handleNext = () => {
        setPage(page + 1)
    }


    return (
        <div>
            <ul className="List__Card gap-page">
                <button className="btn_p"  disabled={page === 1 && true} onClick={handlePrev}>&lt;</button>
                {
                    arrPages.slice(initialPageBlock, endPageBlock).map(pageNumber => (
                        <li
                            className={`${pageNumber === page && "active-page"}`}
                            onClick={() => changePage(pageNumber)}
                            key={pageNumber}>{pageNumber}</li>
                    ))
                }
                <button className="btn_p" onClick={handleNext}>&gt;</button>
            </ul>
            <article className="List__Card">
                {
                    pokemons?.slice(starIndex, endIndex).map(pokeInfo => (
                        <PokeCard
                            key={pokeInfo.url}
                            pokeInfo={pokeInfo}
                        />
                    ))
                }
            </article>
        </div>
    )
}

export default ListPokemons