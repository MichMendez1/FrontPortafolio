	/* extrayendo los cursos de la api */
    const baseUrl="http://localhost:3001"
	export const cursos = async() =>{
		const response = await fetch(`${baseUrl}/cursos`);
		const listaCursos = [];
		const datos = await response.json();
		datos.forEach(e => {
			if(e.nombre) listaCursos.push(e.nombre)
		});
		return listaCursos
	}
	// const TodosLosCursos = cursos()

    