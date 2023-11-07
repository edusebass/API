let url = "https://jsonplaceholder.typicode.com/users";

const obtenerUsaurios = async () => {
    try {
        let response = await fetch(url);
        if (!response.ok) {
        throw new Error("Ourrio un Error al realizar la petición");
        }
        let data = await response.json();
        pintarUsuarios(data);
    } catch (error) {
        console.log(error);
    }
};

const pintarUsuarios = (data) => 
{
}