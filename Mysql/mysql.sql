CREATE DATABASE TP03

    CREATE TABLE CLIENT (
    NOM_CLIENT VARCHAR(50),
    PRENOM_CLIENT VARCHAR (30),
    ADRESSE_CLIENT VARCHAR(50),
    NUM_CLIENT INT
    );
    CREATE TABLE CHAMBRE (
    CAPACITE_CHAMBRE INT,
    DEGRE_CONFORT VARCHAR (50),
    EXPOSITION VARCHAR(50),
    TYPE_CHAMBRE VARCHAR(50),
    NUM_CHAMBRE INT,
    NUM_HOTEL INT
    );
    CREATE TABLE HOTEL (
    CAPACITE_HOTEL INT(50),
    CATEGORIE_HOTEL VARCHAR (50),
    NOM_HOTEL VARCHAR(50),
    ADRESSE_HOTEL VARCHAR(50),
    NUM_HOTEL INT,
    NUM_STATION INT
    );
    CREATE TABLE STATION (
    NUM_STATION INT,
    NOM_STATION VARCHAR (30)
    );

    CREATE TABLE RESERVATION (
    NUM_CHAMBRE INT,
    NUM_CLIENT INT,
    DATE_DEBUT DATE,
    DATE_FIN DATE,
    DATE_RESERVATION DATE,
    MONTANT_ARRHES INT,
    PRIX_TOTAL INT
    );


CREATE TABLE VENT1(
/*Code produit*/ 
CODART char(4), 
/*Contact chez le fournisseur*/
CONFOU  varchar(15),
/*Date de commande*/ 
DATCOM datetime, 
/*Délai de livraison */
DELLIV smallint, 
/*Date dernière livraison*/ 
DERLIV datetime, 
/*Libellé Produit */
LIBART varchar(30), 
/*Numéro de commande*/ 
NUMCOM int, 
/*N° de compte fournisseur */
NUMFOU tinyint, 
/*N° de ligne commande*/
NUMLIG tinyint,
/*Nom fournisseur*/
NOMFOU varchar(25),
/*Observations*/
OBSCOM varchar(50),
/*Code postal fournisseur */
POSFOU char(5), 
/*Prix unitaire de vente*/
PRIUNI decimal(9, 2),
/*Prix unitaire 1*/
PRIX1 decimal(9, 2),
/*Prix unitaire 2*/
PRIX2 decimal(9, 2),
/*Prix unitaire 3*/
PRIX3 decimal(9, 2),
/*Borne quantité livraison 1*/
QTE1 int,
/*Borne quantité livraison 2*/ 
QTE2 int, 
/*Borne quantité livraison 3*/
QTE3 int, 
/*Quantité annuelle*/
QTEANN int, 
/*Quantité commandée */ 
QTECDE int,  
/*Quantité livrée */
QTELIV int,
/*Adresse fournisseur */
RUEFOU varchar(50),
/*Indice satisfaction*/
SATISF tinyint,
/*Stock d’alerte*/
STKALE int,
/*Stock physique*/
STKPHY int,
/*Unité de mesure*/
UNIMES char(5),
/*Ville fournisseur*/
VILFOU  varchar(30)
    )

CREATE DATABASE TP03

CREATE TABLE VENTE (
    CODART char(4) NOT NULL, 
    NOMFOU varchar(25)NOT NULL, 
    DELLIV smallintNOT NULL, 
    QTE1 intNOT NULL, 
    PRIX1 decimal(9, 2)NOT NULL, 
    QTE2 int, 
    PRIX2 decimal(9, 2), 
    QTE3 int, 
    PRIX3 decimal(9, 2)
    ) 
CREATE TABLE ENTCOM (
    NUMCOM int,  
    OBSCOM varchar(50)NOT NULL, 
    DATCOM datetimeNOT NULL, 
    NUMFOU tinyint,
    )
CREATE TABLE LIGCOM (
    NUMLIG tinyint,
    QTECDE intNOT NOT NULL,  
    PRIUNI decimal(9, 2)NOT NULL, 
    QTELIV int NOT NULL, 
    DERLIV datetime NOT NULL,
    CODART char(4),
    NUMCOM int
    )  
CREATE TABLE FOURNIS (
    NUMFOU tinyint, 
    NOMFOU varchar(25), 
    RUEFOU varchar(50), 
    POSFOU char(5), 
    VILFOU  varchar(30), 
    CONFOU  varchar(15), 
    SATISF tinyint) 
CREATE TABLE PRODUIT (
    CODART char(4),
    LIBART varchar(30), 
    STKALE int, 
    STKPHY int, 
    QTEANN int,  
    UNIMES char(5)
    ) 
CREATE DATABASE PAPYRUS