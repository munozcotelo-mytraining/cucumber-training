class Workspace {

    private sharedVariable : string = "I'm a shared variable in Workspace";

    public getSharedVariable() : string {

        const me : Workspace = this;

        return me.sharedVariable;

    }

}

export { Workspace };
