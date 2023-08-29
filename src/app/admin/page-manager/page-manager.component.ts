import { LocationStrategy } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-manager',
  templateUrl: './page-manager.component.html',
  styleUrls: ['./page-manager.component.scss']
})
export class PageManagerComponent {
  show: boolean = false;
  sunTVForm!: FormGroup;
  imageSrc: any;
  imageSrcOne: any;
  imageSrcTwo: any;
  imageSrcThree: any;
  imageSrcFour: any;
  imageData: any;
  imageDataOne: any;
  imageDataTwo: any;
  imageDataThree: any;
  imageDataFour: any;
  checkFormDataValue: boolean = false;
  payloadId: any;
  buttonText = "Create";
  allCareer: any[] = [];

  constructor(
    private fb: FormBuilder,
    private location: LocationStrategy,
    // private careerService: CareerService,
    // private notifyService: NotificationsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    this.initCareerForm();
    this.fetchCareerSetup();
    this.fetchAllCareer();
  }

  initCareerForm() {
    this.sunTVForm = this.fb.group({
      title_visible: ["", Validators.required],
      eventOne: ["", Validators.required],
      eventTwo: ["", Validators.required],
      eventThree: ["", Validators.required],
      newsUpdateOne: ["", Validators.required],
      newsUpdateThree: ["", Validators.required],
      newsUpdateTwo: ["", Validators.required],

      event_visible: ["", Validators.required],
      image1: [""],
      image2: [""],
      image3: [""],
      image4: ["",],
      advertbanner: [""],
    });
  }

  // addNewJob() {
  //   this.router.navigate(["admin/website/career/new"]);
  // }

  // edit(id: any) {
  //   this.router.navigate(["admin/website/career/view/" + id]);
  // }

  back() {
    this.location.back()
  }

  slide(event: any) {
    if (event.checked === true) {
      this.show = true;
      this.sunTVForm.patchValue({
        title_visible: true,
      });
    } else {
      this.show = false;
      this.sunTVForm.patchValue({
        title_visible: false,
      });
    }
  }

  clear() {
    // let item = document.getElementById('description') as HTMLInputElement;
    this.sunTVForm.patchValue({
      eventOne: "",
      eventTwo: '',
      eventThree: '',
      newsUpdateOne: '',
      newsUpdateTwo: '',
      newsUpdateThree: '',
    });
  }

  clearTitle() {
    // let item = document.getElementById('title') as HTMLInputElement;
    this.sunTVForm.patchValue({
      eventOne: "",
      eventTwo: '',
      eventThree: '',
      newsUpdateOne: '',
      newsUpdateTwo: '',
      newsUpdateThree: '',
    });
  }

  handleMediaSelect(event: any) {
    const reader = new FileReader();

    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (event.target.id === "file_one") {
          this.imageSrcOne = reader.result as string;
          this.sunTVForm.patchValue({ 'image1': this.imageSrcOne });
          return;
        }

        if (event.target.id === "file_two") {
          this.imageSrcTwo = reader.result as string;
          this.sunTVForm.patchValue({ 'image2': this.imageSrcTwo });
          return;
        }

        if (event.target.id === "file_three") {
          this.imageSrcThree = reader.result as string;
          this.sunTVForm.patchValue({ 'image3': this.imageSrcThree });
          return;
        }

        if (event.target.id === "file_four") {
          this.imageSrcFour = reader.result as string;
          this.sunTVForm.patchValue({ 'image4': this.imageSrcFour });
          return;
        }

        if (event.target.id === "file") {
          this.imageSrc = reader.result as string;
          this.sunTVForm.patchValue({ 'advertbanner': this.imageSrc });
          return;
        }
      };
    }
  }

  checkFormData(data: any) {
    if (!data) {
      this.checkFormDataValue = true;
      this.buttonText = "Create";
    } else {
      this.checkFormDataValue = false;
      this.buttonText = "Save Changes";
      this.populateForm(data);
    }
  }

  populateForm(data: any) {
    this.imageSrc = data?.advertbanner;
    this.payloadId = data?.id;

    this.sunTVForm = this.fb.group({
      // description: [data?.description, Validators.required],
      // description_visible: [data?.description_visible, Validators.required],
      eventOne: [data?.description_visible, Validators.required],
      eventTwo: [data?.description_visible, Validators.required],
      eventThree: [data?.description_visible, Validators.required],
      newsUpdateOne: [data?.description_visible, Validators.required],
      newsUpdateThree: [data?.description_visible, Validators.required],
      newsUpdateTwo: [data?.description_visible, Validators.required],

      // title: [data?.title, Validators.required],
      // title_visible: [data?.title_visible, Validators.required],
      advertbanner: [null],
      image1: [null],
      image2: [null],
      image3: [null],
      image4: [null],
    });
    this.imageSrcOne = data.image1;
    this.imageSrcTwo = data.image2;
    this.imageSrcThree = data.image3;
    this.imageSrcFour = data.image4;
  }

  fetchCareerSetup() {
    // this.careerService.getCareerSetup().subscribe((res: any) => {
    //   this.checkFormData(res?.data?.careerSetup);
    //   this.payloadId = res?.data?.careerSetup.id;
    // });
  }

  fetchAllCareer() {
    // this.careerService.getAllCareer().subscribe((res: any) => {
    //   this.allCareer = res?.data;
    // });
  }

  createCareer(data: any) {
    // this.careerService.createCareerSetup(data).subscribe(
    //   (res: any) => {
    //     if (res.error === false) {
    //       this.fetchCareerSetup();
    //       this.notifyService.publishMessages(res.message, "success");
    //     } else {
    //       this.notifyService.publishMessages(res.message, "danger");
    //     }
    //   },
    //   (err) => {
    //     this.notifyService.publishMessages(err.error.message, "danger");
    //   }
    // );
  }

  updateCareer(data: any) {
    // data.id = this.payloadId
    // this.careerService.updateCareerSetup(data).subscribe(
    //   (res: any) => {
    //     if (res.error === false) {
    //       this.notifyService.publishMessages(res.message, "success");
    //       this.fetchCareerSetup();
    //     } else {
    //       this.notifyService.publishMessages(res.message, "danger");
    //     }
    //   },
    //   (err) => {
    //     this.notifyService.publishMessages(err.error.message, "danger");
    //   }
    // );
  }

  submit() {
    if (this.checkFormDataValue == true) {
      this.createCareer(this.sunTVForm.value);
    } else {
      this.updateCareer(this.sunTVForm.value);
    }
  }
}
