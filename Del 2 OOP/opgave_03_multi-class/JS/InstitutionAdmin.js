class InstitutionAdmin {
    constructor() {
        // bruger man navn her? Der er jo kun 1...
        this.name = "Admin";
        this.institutions = [];
        // man skal vel også have en admin, som Institution kan referere til?
    }

    addInstitution(newinstitution) {
        let newInstitution = newinstitution;
        this.institutions.push(newInstitution);
        return this.institutions;
    }

    removeInstitution(institutionobject) {
        // loop array
        // hvis institutions-objekt = array[index]:
        // splice(indexOf(array[index]), 1)
        this.institutions.forEach(inst => {
            if(inst == institutionobject || inst.name == institutionobject.name) {
                this.institutions.splice(this.institutions.indexOf(inst), 1);
                // skulle jeg egentlig ikke returnere de andre remove-methods?
                return this.institutions;
            }
        })
    }





}