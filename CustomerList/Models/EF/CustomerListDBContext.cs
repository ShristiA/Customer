using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Web;

namespace CustomerList.Models.EF
{
    public class CustomerListDBContext : DbContext
    {
        public CustomerListDBContext() : base("name = CustomerListDBContext")
        {

        }

        //setting EF convention
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            //use singular table name
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
            base.OnModelCreating(modelBuilder);
        }
        public DbSet<User>Users{ get; set;}
    }
}