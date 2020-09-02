const subjects =[
    "Artes",
    "Educação física",
    "Ciências",
    "Geografia",
    "Matemática",
    "Física",
    "Química",
    
    ]
    
    const weekdays =[
        "Domingo",
       "Segunda-feira",
        "Terça-feira",
        "Quarta-feira",
        "Quinta-feira",
        "Sexta-feira",
        "Sábado",
        ]
    
    
    //Funcionalidades
    
    function convertHoursToMinutes(time){
        const [hour, minutes] = time.split(":")
        return Number((hour * 60)) + minutes

    }



    //Pegar a aula e voltar qual o nome da aula
    function getSubject(subjectNumber){
        const position = +subjectNumber -1
        return subjects[position]
    }

    module.exports = {
        subjects,
        weekdays,
        getSubject,
        convertHoursToMinutes
        
    }