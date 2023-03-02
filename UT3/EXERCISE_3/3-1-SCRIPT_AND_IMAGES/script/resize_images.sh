#!/bin/bash

# Nom del directori on estan les imatges que volem modificar
carpeta="/home/gabriel/Imágenes/imatges"

# Resolució final de les imatges (WIDTH)
size_1024="1024x"
size_768="768x"
size_460="460x"

# Ens siTuam en el directori
cd $carpeta

# Iteram per cada imatge en carpeta
for fitxer in $carpeta/*
do
  
  # Desam el nom inicial del fitxer per obtenir els noms finals 
  nom_fitxer_sense_ext=$(echo "$fitxer" | cut -d . -f1)
  nom_nou_fitxer_1024="$nom_fitxer_sense_ext $size_1024"
  nom_nou_fitxer_768="$nom_fitxer_sense_ext $size_768"
  nom_nou_fitxer_460="$nom_fitxer_sense_ext $size_460"
  
  # Amb ImageMagick modificam el tamany de la imatge
  
  convert $fitxer -resize $size_1024 "$nom_nou_fitxer_1024.jpg"
  convert $fitxer -resize $size_768 "$nom_nou_fitxer_768.jpg"
  convert $fitxer -resize $size_460 "$nom_nou_fitxer_460.jpg"

done

# Missatge final
echo "EXECUCIÓ COMPLETADA!"

