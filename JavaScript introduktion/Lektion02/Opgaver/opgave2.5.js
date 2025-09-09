let personer = [{Navn : 'Karsten Kirkegaard', email : 'karsten-kirkegaard@homail.com', mobil : '29261452'},
                 { Navn : 'Anna Hansen', email: 'anna.hansen@email.com', mobil: '87654321' },
                {Navn : 'Jens Hansen', email : 'JensHansen@gmail.com', mobil : '99999999'}] 


                console.table(personer);

               
                console.log(personer[0].email);
                console.log(personer[2].mobil);


                //crud på array

                personer.push({Navn : 'jens peter', email : 'jensenpeter@gmail.com',mobil : '11111111'});

                console.table('person tilføjet' , personer)

                personer.pop()


                console.table('person fjernet',personer);

                personer.push({Navn : 'jens peter', email : 'jensenpeter@gmail.com',mobil : '11111111'});

                
