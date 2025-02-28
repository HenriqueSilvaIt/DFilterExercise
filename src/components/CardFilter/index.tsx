import './style.css';

export default function CardFilter() {
    return (
        <section className="d-card-filter d-container d-mt20">
            <div className="d-card-details d-mt20">
                <form>  
                <div className="d-input"> 
                        <input  placeholder="Preço minímo">
                     </input>
                     </div>
                        <div className="d-input"> 
                        <input  placeholder="Preço máximo">
                        </input>
                    </div>
                    <div>
                        <button className="d-btn-filter">
                            Filter
                        </button>
                    </div>
                </form>
            </div>

        </section>
    );
}