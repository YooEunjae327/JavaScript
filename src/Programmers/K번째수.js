function solution(array, commands) {

let input1 = []
let input2 = []
let input3 = []
let end = []

for(let i = 0; i < 3; i++)
{
    for(let j = commands[i][0]; j <= commands[i][1]; j++)
    {
        if(i === 0)
        {
            input1.push(array[j - 1])
        }
        else if(i === 1)
        {
            input2.push(array[j - 1])
        }
        else if(i === 2)
        {
            input3.push(array[j - 1])
        }
    }

}
input1.sort((a,b) => a - b)
input2.sort((a,b) => a - b)
input3.sort((a,b) => a - b)

for(let i = 0; i < 3; i++)
{
    if(i === 0)
    {
        end.push(input1[commands[i][2] - 1])
    }
    else if(i === 1)
    {
        end.push(input2[commands[i][2] - 1])
    }
    else if(i === 2)
    {
        end.push(input3[commands[i][2] - 1])
    }
}

    return end
}