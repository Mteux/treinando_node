import chalk from 'chalk'

const nota = 6

if (nota >=7) {
    console.log(chalk.green('Parabens'));
    
} else {
    console.log(chalk.bgRed.black('recuperação!'));
}

