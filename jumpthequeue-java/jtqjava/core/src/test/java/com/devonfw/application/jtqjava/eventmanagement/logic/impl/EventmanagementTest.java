package com.devonfw.application.jtqjava.eventmanagement.logic.impl;

import java.sql.Timestamp;
import java.time.Instant;

import javax.inject.Inject;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import com.devonfw.application.jtqjava.SpringBootApp;
import com.devonfw.application.jtqjava.eventmanagement.logic.api.Eventmanagement;
import com.devonfw.application.jtqjava.eventmanagement.logic.api.to.EventEto;
import com.devonfw.module.test.common.base.ComponentTest;

/**
 * @author kragarwa
 *
 */
@SpringBootTest(classes = SpringBootApp.class)
public class EventmanagementTest extends ComponentTest {

  private EventEto eventEto = new EventEto();

  @Inject
  private Eventmanagement eventmanagement;

  @Override
  protected void doSetUp() {

    this.eventEto.setEventName("December Fest");
    this.eventEto.setStartDate(Timestamp.from(Instant.now()));
    this.eventEto.setEndDate(Timestamp.from(Instant.now()));
    this.eventEto.setLocation("Banglore");
    this.eventEto.setDescription("Biggest december eve is here");
    this.eventEto.setLogo("");
    this.eventEto.setVisitorCount(1);
    this.eventEto.setAttentionTime("5");
  }

  @Test
  public void saveEventTest() {

    EventEto eventEtoResult = this.eventmanagement.saveEvent(this.eventEto);

    assertThat(eventEtoResult.getId()).isNotNull();
    this.eventmanagement.deleteEvent(eventEtoResult.getId());
  }

  @Test
  public void increaseVisitorCountTest() {

    EventEto eventEtoResult = this.eventmanagement.saveEvent(this.eventEto);
    this.eventmanagement.increaseVisitorCount(eventEtoResult.getId());
    EventEto event = this.eventmanagement.findEvent(eventEtoResult.getId());
    assertThat(event.getVisitorCount()).isEqualTo(this.eventEto.getVisitorCount() + 1);
  }

  @Test
  public void decreaseVisitorCountTest() {

    EventEto eventEtoResult = this.eventmanagement.saveEvent(this.eventEto);
    this.eventmanagement.decreaseVisitorCount(eventEtoResult.getId());
    EventEto event = this.eventmanagement.findEvent(eventEtoResult.getId());
    assertThat(event.getVisitorCount()).isEqualTo(this.eventEto.getVisitorCount() - 1);
  }
}
