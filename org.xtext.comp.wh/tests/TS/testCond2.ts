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

    let outputs: BinTree[] = f0(input0, input1);
    console.log(BinTree.binTreesToNumbers(outputs));
    console.log(BinTree.displayTrees(outputs));
}

function f0(Var1: BinTree, Var2: BinTree) : BinTree[] {

    let Var3: BinTree = new BinTree("nil", null, null);

    let TempVar0: BinTree;
    let TempVar1: BinTree;

    TempVar1 = BinTree.eq(Var1, Var2);
    TempVar0 = BinTree.not(TempVar1);
    Var3 = TempVar0;

    return [Var3];
}



main(process.argv.slice(2));