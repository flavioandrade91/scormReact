import React from "react";
import styles from './Autores.module.css'
import images from "./Images";

export function Autores({ id, autores, FotoPerfil }) {
    const autor = autores && autores.find(autor => autor.id === id);

    const renderBiografia = () => {
        return autor && autor.biografia ? (
            <div className={styles.biografia}>
                <div className={styles.nome} key={autor.id}>
                    <span className="accessible-text">{autor.nome}</span>
                </div>
                <div className={styles.texto} key={autor.id}>
                    <p className="accessible-text">{autor.biografia[0]}</p>
                </div>
                <div className={styles.texto} key={autor.id}>
                    <p className="accessible-text">{autor.biografia[1]}</p>
                </div>
            </div>
        ) : (
            <p>Erro ao carregar a biografia</p>
        );
    };

    return (
        <div className={styles.autorContainer}>
            <div className={styles.headerAutor}>
                <img src={images.iconPerfil} alt="Ícone de Perfil" />
                <span>SOBRE A AUTORA</span>
            </div>
            <div className={styles.autorContent}>
                <img src={FotoPerfil} alt="Foto de Perfil" />
                {renderBiografia()}
            </div>
        </div>
    );
}
