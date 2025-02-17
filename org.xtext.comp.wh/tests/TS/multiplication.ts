import BinTree from './BinTree'
var s0 = new BinTree("nil", null, null);
function main(args: string[]) {

    let nb_input: number = 2;
    if(args.length != nb_input) {
        console.error(`Le nombre d'argument n'est pas correct (${args.length} au lieu de ${nb_input})`); return;
    }
// TODO: Check if arg type is number or string
    let i0: number = Number(args[0]);
    let i1: number = Number(args[1]);

    let input0: BinTree;
    if(isNaN(i0)) {
        input0 = BinTree.stringToBinTree(args[0]);
    } else {
        input0 = BinTree.numberToBinTree(i0);
    }

    let input1: BinTree;
    if(isNaN(i1)) {
        input1 = BinTree.stringToBinTree(args[1]);
    } else {
        input1 = BinTree.numberToBinTree(i1);
    }

    let outputs: BinTree[] = f7(input0, input1);
    console.log(BinTree.binTreesToNumbers(outputs));
    console.log(BinTree.displayTrees(outputs));
}

function f6(Var1: BinTree, Var2: BinTree) : BinTree[] {

    let Var3: BinTree = new BinTree("nil", null, null);
    let Var4: BinTree = new BinTree("nil", null, null);

    let TempVar0: BinTree;
    let TempVar1: BinTree;
    let TempVar2: BinTree;

    Var3 = s0;
    Var4 = Var1;
    [TempVar0] = f1(Var4, Var2);


    while(BinTree.isTrue(TempVar0)) {
        TempVar1 = BinTree.cons(s0, Var3);
        Var3 = TempVar1;
        [TempVar2] = f4(Var4, Var2);

        Var4 = TempVar2;
        [TempVar0] = f1(Var4, Var2);


    }

    return [Var4, Var3];
}

function f2(Var1: BinTree, Var2: BinTree) : BinTree[] {

    let Var3: BinTree = new BinTree("nil", null, null);

    let TempVar0: BinTree;
    let TempVar1: BinTree;
    let TempVar2: BinTree;
    let TempVar3: BinTree;

    TempVar0 = BinTree.eq(Var1, Var2);

    if(BinTree.isTrue(TempVar0)){
        Var3 = s0;
    } else {
        TempVar1 = BinTree.cons(s0, s0);
        Var3 = TempVar1;
        let TempVar4: number = BinTree.binTreeToNumber(Var2);
    for(let i = 0; i < TempVar4; i++){
        TempVar2 = BinTree.tl(Var2);
        Var2 = TempVar2;
        TempVar3 = BinTree.eq(Var2, Var1);

    if(BinTree.isTrue(TempVar3)){
        Var3 = s0;
    }

    }

    }


    return [Var3];
}

function f0(Var1: BinTree, Var2: BinTree) : BinTree[] {

    let Var3: BinTree = new BinTree("nil", null, null);

    let TempVar0: BinTree;
    let TempVar1: BinTree;

    [TempVar1] = f1(Var1, Var2);

    TempVar0 = BinTree.not(TempVar1);
    Var3 = TempVar0;

    return [Var3];
}

function f1(Var1: BinTree, Var2: BinTree) : BinTree[] {

    let Var3: BinTree = new BinTree("nil", null, null);

    let TempVar0: BinTree;
    let TempVar1: BinTree;
    let TempVar2: BinTree;

    TempVar0 = BinTree.cons(s0, s0);
    Var3 = TempVar0;
    let TempVar3: number = BinTree.binTreeToNumber(Var2);
    for(let i = 0; i < TempVar3; i++){
        TempVar1 = BinTree.tl(Var2);
        Var2 = TempVar1;
        TempVar2 = BinTree.eq(Var2, Var1);

    if(BinTree.isTrue(TempVar2)){
        Var3 = s0;
    }

    }


    return [Var3];
}

function f7(Var1: BinTree, Var2: BinTree) : BinTree[] {

    let Var3: BinTree = new BinTree("nil", null, null);

    let TempVar0: BinTree;

    [TempVar0] = f5(Var1, Var2);

    Var3 = TempVar0;

    return [Var3];
}

function f5(Var1: BinTree, Var2: BinTree) : BinTree[] {

    let Var3: BinTree = new BinTree("nil", null, null);

    let TempVar0: BinTree;

    Var3 = s0;
    let TempVar1: number = BinTree.binTreeToNumber(Var2);
    for(let i = 0; i < TempVar1; i++){
        [TempVar0] = f3(Var3, Var1);

        Var3 = TempVar0;
    }


    return [Var3];
}

function f4(Var1: BinTree, Var2: BinTree) : BinTree[] {

    let TempVar0: BinTree;

    let TempVar1: number = BinTree.binTreeToNumber(Var2);
    for(let i = 0; i < TempVar1; i++){
        TempVar0 = BinTree.tl(Var1);
        Var1 = TempVar0;
    }


    return [Var1];
}

function f3(Var1: BinTree, Var2: BinTree) : BinTree[] {

    let TempVar0: BinTree;

    let TempVar1: number = BinTree.binTreeToNumber(Var2);
    for(let i = 0; i < TempVar1; i++){
        TempVar0 = BinTree.cons(s0, Var1);
        Var1 = TempVar0;
    }


    return [Var1];
}



main(process.argv.slice(2));