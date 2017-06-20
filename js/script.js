let calculateSalary = (pos, levl) => {
    const directorAllowance = 10000;
	const executiveAllowance = 9000;
	const managerAllowance = 8000;
	const associateAllowance = 7000;
	const internAllowance = 2000;

	let directorSalary = 100000;
	let executiveSalary = 80000;
	let managerSalary = 60000;
	let associateSalary = 40000;
	let internSalary = 20000;


	let directorLeave = 10000;
	let executiveLeave = 8000;
	let managerLeave = 6000;
	let associateLeave = 4000;
	let internLeave = 2000;

	let directorMedical = 1000;
	let executiveMedical = 800;
	let managerMedical = 600;
	let associateMedical = 400;
	let internMedical = 200;

	let directorFurniture = 4400;
	let executiveFurniture = 4200;
	let managerFurniture = 4000;
	let associateFurniture = 3800;
	let internFurniture = 3600;

	let salary = 0;
	let tax = 0;
	let basicSalary = 0;
	let furnitureAll = 0;
	let medicalAll = 0;
	let leaveAll = 0;


    if (pos === 'Select' || levl === 'Select') {
        if (pos === 'Select' && levl === 'Select') {
            $('#ans1').html('Please Select a Position');
            $('#ans2').html('Please Select a Level');
            alert("Oops!! Please fill the form appropriately");
        }
        else {
            if (pos === 'Select' ){
            alert("Please Select a position");
            $('#ans1').html("Please Select a position");
            $('#ans2').html(levl);
            $('#basSal').html("Base Salary: $0");
            }
            else if (levl === 'Select' ){
            alert("Please Select a Level");
            $('#ans1').html(pos);
            $('#ans2').html("Please Select a level");
            $('#basSal').html("Base Salary: $0")
            }
        }
    }
    else if(pos==="Interns"){
        if (levl==="Level One"){
            salary = (1 * internSalary)+(1* internLeave);
             $('#ans1').html(pos);
             $('#ans2').html(levl);
             $('#basSal').html("Base Salary: $"+salary);
        }
        else if (levl==="Level Two"){
            salary = (2 * internSalary)+(2* internLeave);
            $('#ans1').html(pos);
            $('#ans2').html(levl);
            $('#basSal').html("Base Salary: $"+salary);
        }
        else if (levl==="Level Three"){
            salary = (3 * internSalary)+(3* internLeave);
            $('#ans1').html(pos);
            $('#ans2').html(levl);
            $('#basSal').html("Base Salary: $"+salary);
        }
        else if (levl==="Level Four"){
            salary = (4 * internSalary)+(4* internLeave);
            $('#ans1').html(pos);
            $('#ans2').html(levl);
            $('#basSal').html("Base Salary: $"+salary);
        }
        else if (levl==="Level Five"){
            salary = (5 * internSalary)+(5* internLeave);
            $('#ans1').html(pos);
            $('#ans2').html(levl);
            $('#basSal').html("Base Salary: $"+salary);
        }
    }
    else if(pos==="Associates"){
        if (levl==="Level One"){
            salary = (1 * associateSalary)+(1* associateLeave);
             $('#ans1').html(pos);
             $('#ans2').html(levl);
             $('#basSal').html("Base Salary: $"+salary);
        }
        else if (levl==="Level Two"){
            salary = (2 * associateSalary)+(2* associateLeave);
            $('#ans1').html(pos);
            $('#ans2').html(levl);
            $('#basSal').html("Base Salary: $"+salary);
        }
        else if (levl==="Level Three"){
            salary = (3 * associateSalary)+(3* associateLeave);
            $('#ans1').html(pos);
            $('#ans2').html(levl);
            $('#basSal').html("Base Salary: $"+salary);
        }
        else if (levl==="Level Four"){
            salary = (4 * associateSalary)+(4* associateLeave);
            $('#ans1').html(pos);
            $('#ans2').html(levl);
            $('#basSal').html("Base Salary: $"+salary);
        }
        else if (levl==="Level Five"){
            salary = (5 * associateSalary)+(5* associateLeave);
            $('#ans1').html(pos);
            $('#ans2').html(levl);
            $('#basSal').html("Base Salary: $"+salary);
        }
    }
    else if(pos==="Managers"){
        if (levl==="Level One"){
            salary = (1 * managerSalary)+(1* managerLeave);
             $('#ans1').html(pos);
             $('#ans2').html(levl);
             $('#basSal').html("Base Salary: $"+salary);
        }
        else if (levl==="Level Two"){
            salary = (2 * managerSalary)+(2* managerLeave);
            $('#ans1').html(pos);
            $('#ans2').html(levl);
            $('#basSal').html("Base Salary: $"+salary);
        }
        else if (levl==="Level Three"){
            salary = (3 * managerSalary)+(3* managerLeave);
            $('#ans1').html(pos);
            $('#ans2').html(levl);
            $('#basSal').html("Base Salary: $"+salary);
        }
        else if (levl==="Level Four"){
            salary = (4 * managerSalary)+(4* managerLeave);
            $('#ans1').html(pos);
            $('#ans2').html(levl);
            $('#basSal').html("Base Salary: $"+salary);
        }
        else if (levl==="Level Five"){
            salary = (5 * managerSalary)+(5* managerLeave);
            $('#ans1').html(pos);
            $('#ans2').html(levl);
            $('#basSal').html("Base Salary: $"+salary);
        }
    }
    else if(pos==="Executives"){
        if (levl==="Level One"){
            salary = (1 * executiveSalary)+(1* executiveLeave);
             $('#ans1').html(pos);
             $('#ans2').html(levl);
             $('#basSal').html("Base Salary: $"+salary);
        }
        else if (levl==="Level Two"){
            salary = (2 * executiveSalary)+(2* executiveLeave);
            $('#ans1').html(pos);
            $('#ans2').html(levl);
            $('#basSal').html("Base Salary: $"+salary);
        }
        else if (levl==="Level Three"){
            salary = (3 * executiveSalary)+(3* executiveLeave);
            $('#ans1').html(pos);
            $('#ans2').html(levl);
            $('#basSal').html("Base Salary: $"+salary);
        }
        else if (levl==="Level Four"){
            salary = (4 * executiveSalary)+(4* executiveLeave);
            $('#ans1').html(pos);
            $('#ans2').html(levl);
            $('#basSal').html("Base Salary: $"+salary);
        }
        else if (levl==="Level Five"){
            salary = (5 * executiveLeave)+(5* executiveSalary);
            $('#ans1').html(pos);
            $('#ans2').html(levl);
            $('#basSal').html("Base Salary: $"+salary);
        }
    }
    else if(pos==="Directors"){
        if (levl==="Level One"){
            salary = (1 * directorSalary)+(1* directorLeave);
             $('#ans1').html(pos);
             $('#ans2').html(levl);
             $('#basSal').html("Base Salary: $"+salary);
        }
        else if (levl==="Level Two"){
            salary = (2 * directorSalary)+(2* directorLeave);
            $('#ans1').html(pos);
            $('#ans2').html(levl);
            $('#basSal').html("Base Salary: $"+salary);
        }
        else if (levl==="Level Three"){
            salary = (3 * directorSalary)+(3* directorLeave);
            $('#ans1').html(pos);
            $('#ans2').html(levl);
            $('#basSal').html("Base Salary: $"+salary);
        }
        else if (levl==="Level Four"){
            salary = (4 * directorSalary)+(4* directorLeave);
            $('#ans1').html(pos);
            $('#ans2').html(levl);
            $('#basSal').html("Base Salary: $"+salary);
        }
        else if (levl==="Level Five"){
            salary = (5 * directorSalary)+(5* directorLeave);
            $('#ans1').html(pos);
            $('#ans2').html(levl);
            $('#basSal').html("Base Salary: $"+salary);
        }
    }

    else {
        $('#ans1').html(pos);
        $('#ans2').html(levl);
    }
}
$(document).ready(function () {
    $('.img-box').fadeOut(1000);
    $(".butn").on("click", function () {
        let pos = $('.sel').val();
        let levl = $('.lev').val();
        $('.img-box').html(calculateSalary(pos, levl));
        $('.img-box').fadeIn(1000);//.show();
    });
    $(".sel").on("click", function () {
         $('.img-box').fadeOut(1000);
    });
    $(".lev").on("click", function () {
         $('.img-box').fadeOut(1000);
    });
});