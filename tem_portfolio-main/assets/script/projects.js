const ProjectsData = [
  {
    name: "CI/CD Pipeline with Jenkins",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg",
    description:
      "Designed and deployed a CI/CD pipeline using Jenkins for a Node.js application. Automated testing, Docker builds, and deployment to Kubernetes clusters.",
    link: "https://github.com/r-jkum-r/jenkins-cicd-pipeline",
  },
  {
    name: "Infrastructure as Code with Terraform",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg",
    description:
      "Provisioned AWS infrastructure (VPC, EC2, RDS) using Terraform. Modularized code for scalability and implemented remote state backend with S3 and DynamoDB.",
    link: "https://github.com/r-jkum-r/terraform-infra",
  },
  {
    name: "Containerization with Docker",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    description:
      "Containerized full-stack MERN application using Docker and Docker Compose. Streamlined local development and enabled cross-environment consistency.",
    link: "https://github.com/r-jkum-r/docker-mern-app",
  },
  {
    name: "Kubernetes Deployment",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg",
    description:
      "Deployed microservices on Kubernetes using manifest files. Set up services, ingress, secrets, configMaps, and liveness/readiness probes.",
    link: "https://github.com/r-jkum-r/k8s-nodeapp",
  },
  {
    name: "Monitoring with Prometheus & Grafana",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grafana/grafana-original.svg",
    description:
      "Integrated Prometheus and Grafana to monitor system and application metrics in Kubernetes. Created custom dashboards and set up alert rules.",
    link: "https://github.com/r-jkum-r/prometheus-grafana-monitoring",
  },
  {
    name: "Ansible Automation Project",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ansible/ansible-original.svg",
    description:
      "Automated software provisioning and configuration management across multiple servers using Ansible playbooks. Managed Nginx, Node.js, and MySQL setup.",
    link: "https://github.com/r-jkum-r/ansible-automation",
  }
];

const ProjectsDataHTML = ProjectsData.map(
  (item) => `
           <div class="projects-card">
              <img loading="lazy" src="${item.logo}" alt="${item.name}">
              <h3>${item.name}</h3>
              <p>${item.description}</p>
              <a href="${item.link}" title="${item.name}" target="_blank">View</a>
          </div>
      `
).join("");

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("projects-card-container").innerHTML =
    ProjectsDataHTML;
});
