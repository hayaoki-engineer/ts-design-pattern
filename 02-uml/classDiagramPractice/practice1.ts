// クラス図 演習1
class Employee {
    private id: number;
    private name: string;
    private salary: number;

    // メソット
    work() {
        console.log('働きます')
    }

    protected getSarary(): number {
        return this.salary;
    }

    protected setSalary(salary: number) {
        this.salary = salary;
    }
}