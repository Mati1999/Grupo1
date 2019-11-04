# Grupo1

# CLONAR UN REPOSITORIO: git clone {url del repo}
Esto se hace solo una vez.

# CAMBIAR DE BRANCH: git checkout {nombre del branch al que queremos ir}
Esto es para movernos a un branch cualquiera, por ejemplo si queremos ir al branch master, tenemos que poner “git checkout master”

# ACTUALIZAR UN BRANCH: git pull
Primero hay que pararse en el branch que queremos con “git checkout {nombre del branch}” y una vez que estamos parados ahi corremos “git pull” para descargar los ultimos cambios.

# CREAR UN BRANCH NUEVO: git branch {nombre del branch} origin master
esto significa que vamos a crear un branch con el nombre que elegimos y va a tener el codigo que tiene master al momento de crear el branch

# SUBIR LOS CAMBIOS AL REPOSITORIO LOCAL
1- si tenemos archivos nuevos, primero tenemos que subir los archivos con “git add {nombre del archivo}”
2- git commit -m {mensaje descriptivo de los cambios}

# SUBIR LOS CAMBIOS AL REPOSITORIO REMOTO
git push
